import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router";

export function Home() {
  const { i18n, t } = useTranslation();

  return (
    <div>
      <h3>Welcome Home!</h3>
      <h5>{t("hello")}</h5>

      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>切换语言</Button>
        <Button onClick={() => i18n.changeLanguage("en")} variant="soft">
          English
        </Button>
        <Button onClick={() => i18n.changeLanguage("zh-CN")} variant="soft">
          简体中文
        </Button>
      </Flex>
      <Link to="/table">
        <strong>Table</strong>
      </Link>

      <Outlet />
    </div>
  );
}
