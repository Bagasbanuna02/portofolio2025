import { MantineSize, ThemeIcon } from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export function CompButtonMediaSocial({
  themeSize,
  iconSize,
}: {
  themeSize?: number | MantineSize;
  iconSize?: number | MantineSize;
}) {
  return (
    <>
        <Link href="https://github.com/Bagasbanuna02" passHref target="_blank">
          <ThemeIcon size={themeSize || 50} radius="xl" color="blue">
            <IconBrandGithub size={iconSize || 24} />
          </ThemeIcon>
        </Link>
        <Link
          href="https://www.linkedin.com/in/bagas-nusantara-nabillah-45035a224/"
          passHref
          target="_top"
        >
          <ThemeIcon size={themeSize || 50} radius="xl" color="blue">
            <IconBrandLinkedin size={iconSize || 24} />
          </ThemeIcon>
        </Link>
        <Link href="mailto:bagasbanuna12@gmail.com" target="" >
          <ThemeIcon size={themeSize || 50} radius="xl" color="blue">
            <IconMail size={iconSize || 24} />
          </ThemeIcon>
        </Link>
    </>
  );
}
