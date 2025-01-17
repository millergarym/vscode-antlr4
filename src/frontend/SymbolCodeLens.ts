import { CodeLens, Range } from "vscode";
import { ISymbolInfo } from "../backend/types.js";

export class SymbolCodeLens extends CodeLens {
    public constructor(public symbol: ISymbolInfo, range: Range) {
        super(range);
    }
}
