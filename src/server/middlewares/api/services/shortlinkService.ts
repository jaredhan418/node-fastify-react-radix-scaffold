import { pool } from "../../../db.js";

const BASE62_CHARSET =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Base62Encode(decimal: number) {
  let result = "";
  while (decimal > 0) {
    result = BASE62_CHARSET[decimal % 62] + result;
    decimal = Math.floor(decimal / 62);
  }
  return result;
}

// function Base62Decode(base62: string) {
//   let decimalResult = 0;
//   const base62Lenth = base62.length;

//   for (let i = 0; i < base62Lenth; i++) {
//     const base62Char = base62.at(i);

//     if (!base62Char) return undefined;

//     const decimalNumber = BASE62_CHARSET.indexOf(base62Char);

//     decimalResult += decimalNumber * Math.pow(62, base62Lenth - i - 1);
//   }

//   return decimalResult;
// }

/**
 * @param originLink original url, max lenth 65535 characters
 * @returns shortlink with auto increase base62 string
 */
export async function createShortLink(originLink: string) {
  const trimOriginLink = originLink.trim();

  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);

      connection.query(
        `SELECT shortlinkId, originalLink FROM short_origin_table WHERE originalLink=${connection.escape(
          trimOriginLink
        )};`,
        (err, results) => {
          if (err) return reject(err);

          if (results.length === 0) {
            connection.beginTransaction((err) => {
              if (err) return reject(err);

              connection.query(
                `SELECT COUNT(*) as count FROM short_origin_table;`,
                (err, result) => {
                  if (err) {
                    connection.rollback();
                    return reject(err);
                  }

                  // limit to maxium 8 characters
                  const shortlinkId = Base62Encode(
                    result[0].count + 1
                  ).substring(0, 8);

                  connection.query(
                    `INSERT INTO short_origin_table (shortlinkId,originalLink) VALUES ('${shortlinkId}','${trimOriginLink}');`,
                    (err, result) => {
                      if (err) {
                        connection.rollback();
                        return reject(err);
                      }

                      connection.commit((err) => {
                        if (err) {
                          connection.rollback();
                          return reject(err);
                        }

                        return resolve(shortlinkId);
                      });
                    }
                  );
                }
              );
            });
          } else {
            return resolve(results[0].shortlinkId);
          }
        }
      );
    });
  });
}

export async function getOriginLinkById(shortLinkId: string) {
  return new Promise<string>((resolve, reject) => {
    if (shortLinkId.length > 8) return reject();
    pool.getConnection((err, connection) => {
      if (err) return reject();

      connection.query(
        `SELECT originalLink FROM short_origin_table WHERE shortlinkId=${connection.escape(
          shortLinkId,
          true
        )};`,
        (err, results) => {
          if (err) return reject();

          if (results.length === 0) return reject();

          return resolve(results[0].originalLink);
        }
      );
    });
  });
}
