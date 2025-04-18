"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCatNames = void 0;
function formatCatNames(names) {
    if (names.length === 1) {
        return names[0];
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    }
    const last = names.pop();
    return `${names.join(', ')} and ${last}`;
}
exports.formatCatNames = formatCatNames;
//# sourceMappingURL=format-cat-names.js.map