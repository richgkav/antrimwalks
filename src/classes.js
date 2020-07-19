export class Walk {

    // images is an array of [image, alt text, title, ....]
    
    constructor(title, thumbnail, thumbalt, description, images) {
        this.title = title;
		this.thumbnail = thumbnail;
		this.thumbalt = thumbalt;
        this.description = description;
        this.images = images;
    }
}

/*
export class Location {
    constructor(title, thumbnail, thumbalt, description) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.thumbalt = thumbalt;
        this.description = description;
    }
}
*/
