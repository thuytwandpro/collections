import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collection';
  message = '';
  status:boolean;
  items: Observable<any[]>;
  new = {
    bookmark: '',
    collection: ''
  }
  constructor(private afs: AngularFireDatabase){
  // this.afs.list('collection').push({ slug: 'code-fight', name: 'Code Fight' });
    this.items = afs.list('collection').valueChanges();
    }

    addBookmark(){
      if(confirm('Are you sure want add this bookmark?')){
      this.afs.list('collection').push({ 
        slug: this.new['bookmark'].toLowerCase().trim().split(' ').join('-'), 
        name: this.new['bookmark'] 
      }).then(()=>{
        $('#bookmark').modal('hide'),
        this.status = true,
        this.message = 'Add new bookmark successfully'
      }
      );
      this.new['bookmark'] = '';
    }
    }
}
