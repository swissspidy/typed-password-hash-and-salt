// Type definitions for password-hash-and-salt 0.1.3
// Project: https://github.com/florianheinemann/password-hash-and-salt
// Definitions by: Pascal Birchler <https://github.com/swissspidy>

declare function password(password: string): password.Password;

declare module password {
	export interface Password {
		hash(callback: HashCallback);
		hash(salt: string, callback: HashCallback);
		verifyAgainst(hashedPassword: HashedPassword, callback: VerifyCallback);
	}

	export type HashedPassword = string;
	export type HashCallback = (err: any, hash: string) => void;
	export type VerifyCallback = (err: any, verified: boolean) => void;
}

export = password;
