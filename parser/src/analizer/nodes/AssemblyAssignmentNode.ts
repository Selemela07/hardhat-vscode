import { AssemblyAssignment } from "@solidity-parser/parser/dist/ast-types";

import { Location, FinderType, Node } from "./Node";

export class AssemblyAssignmentNode implements Node {
    type: string;
    uri: string;
    astNode: AssemblyAssignment;

    nameLoc?: Location | undefined;

    parent?: Node | undefined;
    children: Node[] = [];

    constructor (assemblyAssignment: AssemblyAssignment, uri: string) {
        this.type = assemblyAssignment.type;
        this.uri = uri;
        this.astNode = assemblyAssignment;
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
