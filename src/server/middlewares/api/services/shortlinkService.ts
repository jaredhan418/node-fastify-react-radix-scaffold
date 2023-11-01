const BASE62_CHARSET =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function Base62Encode(bigInt: bigint) {
  let result = "";
  while (bigInt > 0n) {
    result = BASE62_CHARSET[parseInt((bigInt % 62n).toString())] + result;
    bigInt = bigInt / 62n;
  }
  return result;
}

export function Base62Decode(base62: string) {
  let bigIntResult = 0n;
  const base62Lenth = base62.length;

  for (let i = 0; i < base62Lenth; i++) {
    const base62Char = base62.at(i);

    if (!base62Char) return undefined;

    const bigIntNUmber = BigInt(BASE62_CHARSET.indexOf(base62Char));

    bigIntResult += bigIntNUmber * 62n ** BigInt(base62Lenth - i - 1);
  }

  return bigIntResult;
}

/**
 * @param originLink original url, max lenth 65535 characters
 * @returns shortlink with auto increase base62 string
 */
export async function createShortLink(originLink: string) {
  return originLink;
}

/**
 * @param shortlinkId short link id, max lenth 8 characters
 * @returns origin link
 */
export async function getOriginLinkById(shortlinkId: string) {
  return shortlinkId;
}
