import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
  players$: Observable<Array<Item>>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.players$ = this.itemService.getItems().pipe(tap(console.log));
  }

  clicked() {
    this.itemService.updateItem();
    console.log("click");
  }
}
