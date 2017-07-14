import { Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ModalController } from 'ionic-angular';
import { ChatFormPage } from '../chatForm/chatForm';
import { MovieService } from '../../services/movie-service';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieService,UserService]
})
export class HomePage {
  movies: Array<any>;

  constructor(public modalCtrl: ModalController, private movieService: MovieService, private userService: UserService) {
    userService.getUsers().subscribe(
        data => {
          console.log('data.results',data.results);
        },
        err => {
          console.log('err',err);
        },
        () => console.log('Movie Search Complete')
      );
  }

 	searchMovieDB(event, key) {
    console.log(event.target.value);
    if(event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data.results; 
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ChatFormPage, characterNum);
    modal.present();
  }
}