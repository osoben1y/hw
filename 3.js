"use strict";
function numUniqueEmails(emails) {
    const seen = new Set();
    for (const email of emails) {
        const [local, domain] = email.split("@");
        const localClean = local.split("+")[0].replace(/\./g, "");
        seen.add(`${localClean}@${domain}`);
    }
    return seen.size;
}
console.log(numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
]));
console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]));
console.log(numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.email.leet+alex@code.com",
]));
