export class Walk {

    // images should be an array of filenames
    
    constructor(layout, thumbnail, description, images) {
        this.layout = layout;
        this.thumbnail = thumbnail;
        this.description = description;
        this.images = images;
    }
}

export class Location {
    constructor(title, thumbnail, description) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
    }
}
