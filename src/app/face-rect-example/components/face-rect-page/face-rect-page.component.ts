import { Component, OnInit, ViewChild } from '@angular/core';
import { FaceRectService } from '../../services/face-rect.service';

@Component({
  selector: 'app-face-rect-page',
  templateUrl: './face-rect-page.component.html',
  styleUrls: ['./face-rect-page.component.scss']
})
export class FaceRectPageComponent implements OnInit {

  @ViewChild('imagePreview', {static: false})
  imagePreviewElement;

  private image: any;

  constructor(private faceRectService: FaceRectService) { }

  ngOnInit() {
  }

  public sendImage() {
    this.faceRectService.sendImage(this.image).subscribe((result) => console.log(result));
  }

  public onFileUpload(event) {
    if (event.target.files && event.target.files[0]) {
      this.image = event.target.files[0];
      this.setImagePreview(this.image);
    }
  }

  private setImagePreview(image) {
    if (this.imagePreviewElement) {
      const reader = new FileReader();
      reader.onload = e => this.imagePreviewElement.nativeElement.src = reader.result;

      reader.readAsDataURL(image);
    }
  }
}
