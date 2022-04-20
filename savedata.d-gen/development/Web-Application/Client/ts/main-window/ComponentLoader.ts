export class ComponentLoader {
    async AsContentFor(mainarticle: HTMLElement) {
        await this.Load()

        var R = new DOMParser().parseFromString(this.PassData, 'text/html').body.childNodes;

        //>> Record Static Count
        var cr = R.length;
        
        for (let i = 0; i < cr; i++) {
            mainarticle.append(R[0]);
        }
 
    }
    PassData!: string;
    path: string;
    constructor(A: string) {
        this.path = A;
    }


    async Load() {
        var stream = await fetch(`component/${this.path.split(".").join("/")}.component.html`);
        this.PassData = await stream.text();
        return this;
    }

}