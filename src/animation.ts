export const BOLD = "PARTY PARTY PARTY"

export default function logMessage(message: string): void {
    // Now, the function will print any message you pass to it in bold.
    console.log(`\x1b[1m${BOLD}\x1b[0m`); 
  }