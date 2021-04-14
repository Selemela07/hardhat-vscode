import { AST, ArrayTypeName } from "@solidity-parser/parser/dist/ast-types";

import { Location, Node } from './Node';

class ArrayTypeNameNode implements Node {
    type: string;

    uri: string;
    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    astNode: AST;

    constructor (uri: string, arrayTypeName: ArrayTypeName) {
        this.type = arrayTypeName.type;

        this.uri = uri;
        // TO-DO: Implement name location for rename

        this.astNode = arrayTypeName;
    }

    addChild(child: Node): void {
        this.children.push(child);
    }

    setParent(parent: Node): void {
        this.parent = parent;
    }

    accept(orphanNodes: Node[], parent?: Node): void {
        // TO-DO: Method not implemented
    }
}
