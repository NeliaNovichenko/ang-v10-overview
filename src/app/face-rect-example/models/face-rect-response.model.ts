
export interface FaceRectResponse {
    faces: FaceRectFace[];
    image: FaceRectImage;
}

export interface FaceRectFace {
    orientation: string;
    landmarks: Coordinates[];
}

export interface FaceRectImage {
    width: number;
    height: number;
}

export interface Coordinates {
    x: number;
    y: number;
}
