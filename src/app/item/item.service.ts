import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";

import { Item } from "./item";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  private items$ = new BehaviorSubject<Array<Item>>(
    new Array<Item>(
      { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
      { id: 3, name: "Piqué", role: "Defender" },
      { id: 4, name: "I. Rakitic", role: "Midfielder" },
      { id: 5, name: "Sergio", role: "Midfielder" },
      { id: 6, name: "Denis Suárez", role: "Midfielder" }
    )
  );

  getItems(): Observable<Array<Item>> {
    return this.items$.asObservable();
  }

  updateItem() {
    // let items = [...this.items];
    let name = "name " + Math.floor(Math.random() * 100);
    // this.items = items.map(items);
    this.items$.next(
      this.items$.getValue().map((item, index) => {
        if (index === 0) return { ...item, name };

        return item;
      })
    );
  }
}
