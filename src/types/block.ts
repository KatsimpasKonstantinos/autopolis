import extra_object from "./extra_object";
import terrain from "./terrain";

type block = {
    terrain: terrain;
    extra_objects: extra_object[];
}

export default block;