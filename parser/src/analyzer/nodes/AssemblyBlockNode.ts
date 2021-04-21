import { AssemblyBlock } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class AssemblyBlockNode implements Node {
    type: string;
    uri: string;
    astNode: AssemblyBlock;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (assemblyBlock: AssemblyBlock, uri: string) {
        this.type = assemblyBlock.type;
        this.uri = uri;
        this.astNode = assemblyBlock;
        // TO-DO: Implement name location for rename
    }

    getName(): string | undefined {
        return undefined;
    }

    addChild(child: Node): void {
        this.children.push(child);
    }

    setParent(parent: Node): void {
        this.parent = parent;
    }

    accept(find: FinderType, orphanNodes: Node[], parent?: Node): void {
        // TO-DO: Method not implemented
    }
}