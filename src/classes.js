export class Walk {

    constructor (layout, thumbnail, description, image1, image2) {
        this.layout = layout;
        this.thumbnail = thumbnail;
        this.description = description;
        this.image1 = image1;
        this.image2 = image2;
    }

}

export class Location {

    constructor (title, thumbnail, description) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
    }
}
