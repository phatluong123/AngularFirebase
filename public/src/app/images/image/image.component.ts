import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';



@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: []
})
export class ImageComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmmited = false;
  uploadPercentage: any;
  downloadUrl: any;

formTemplate = new FormGroup({
  caption : new FormControl('', Validators.required),
  category : new FormControl(''),
  imageUrl : new FormControl('', Validators.required)
});


  constructor(
    private storage: AngularFireStorage,

  ) { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {

    if (event.target.files && event.target.files[0] ) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = '../../../assets/img/download.png';
      this.selectedImage = null;
    }
  }
  onSubmit(formValue) {
    this.isSubmmited = true;
    if (this.formTemplate.valid) {
      const filePath = `${formValue.category}/${ this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedImage);
      this.uploadPercentage = task.percentageChanges();
      task.snapshotChanges().pipe(
        (<any>finalize)(() => this.downloadUrl =  fileRef.getDownloadURL())
      ).subscribe();
    }
  }
  get formControls() {
    return this.formTemplate.controls;
  }
  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl : '',
      category: 'Animal'
    });
    this.imgSrc = '../../../assets/img/download.png';
    this.selectedImage = null;
    this.isSubmmited = false;
  }
}
