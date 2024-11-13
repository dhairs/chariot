// https://github.com/qin-spring-development/spring-of-engivia/blob/9c4fdb29f0db0e9ef1904fe75d64c9c2141faba9/src/lib/auth/hash.ts
import { hashSync } from "bcrypt";

export const toHash = (str: string) => {
  return hashSync(str, `\$2b\$05\$${process.env.NEXTAUTH_SECRET}` as string);
};
