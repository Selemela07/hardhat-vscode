import { AssemblyFunctionDefinition } from "@solidity-parser/parser/dist/src/ast-types";

import { Location, FinderType, Node, Position } from "./Node";

export class AssemblyFunctionDefinitionNode implements Node {
    type: string;
    uri: string;
    astNode: AssemblyFunctionDefinition;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    typeNodes: Node[] = [];

    constructor (assemblyFunctionDefinition: AssemblyFunctionDefinition, uri: string) {
        this.type = assemblyFunctionDefinition.type;
        this.uri = uri;
        this.astNode = assemblyFunctionDefinition;
        // TO-DO: Implement name location for rename
    }

    getTypeNodes(): Node[] {
        return this.typeNodes;
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

    accept(find: FinderType, orphanNodes: Node[], parent?: Node): Node {
        // TO-DO: Method not implemented
        return this;
    }

    getDefinitionNode(): Node {
        // TO-DO: Method not implemented
        return this;
    }
}
