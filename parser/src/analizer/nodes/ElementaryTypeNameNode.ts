import { ElementaryTypeName } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class ElementaryTypeNameNode implements Node {
    type: string;
    uri: string;
    astNode: ElementaryTypeName;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (elementaryTypeName: ElementaryTypeName, uri: string) {
        this.type = elementaryTypeName.type;
        this.uri = uri;
        this.astNode = elementaryTypeName;
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
