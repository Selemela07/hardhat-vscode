import { SemanticTokenTypes } from "vscode-languageserver-protocol";
import { NodeType, TokenNode } from "@nomicfoundation/slang/cst";
import { RuleKind, TokenKind } from "@nomicfoundation/slang/kinds";
import { Cursor } from "@nomicfoundation/slang/cursor";
import { HighlightVisitor } from "../HighlightVisitor";
import { SlangNodeWrapper } from "../../../parser/slangHelpers";

// Highlights interface definitions
export class InterfaceDefinitionHighlighter extends HighlightVisitor {
  public tokenKinds = new Set([TokenKind.Identifier]);

  public enter(nodeWrapper: SlangNodeWrapper): void {
    const ancestors = nodeWrapper.pathRuleNodes;
    if (
      nodeWrapper.type === NodeType.Token &&
      nodeWrapper.kind === TokenKind.Identifier &&
      ancestors[ancestors.length - 1]?.kind === RuleKind.InterfaceDefinition
    ) {
      this.tokenBuilder.addToken(nodeWrapper, SemanticTokenTypes.type);
    }
  }
}
