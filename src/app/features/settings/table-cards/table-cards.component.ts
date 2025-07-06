import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { featureConfig } from '../../feature.config';

@Component({
  selector: 'app-table-cards',
  standalone: true,
  imports: [...featureConfig],
  templateUrl: './table-cards.component.html',
  styleUrl: './table-cards.component.css'
})
export class TableCardsComponent {
  duplicate = false;
  hideCard = false;
  addCard = false;
  editCard = false;
  droppedCards: any = [];
  // constructor(private toaster: ToastrService, private dataService: DataService) { }

  ngOnInit(): void {
  }
  addTableCard() {
    this.addCard = true;
    this.hideCard = false;
    this.editCard = false;
    this.AddTableCard.reset();
    this.AddTableCard.get('id')?.enable();

  }
  editTableCard(item: any) {
    this.editCard = true;
    this.hideCard = false;
    this.AddTableCard.reset();
    this.AddTableCard.patchValue(item);
    this.AddTableCard.get('id')?.disable();
  }
  hideCardDetails() {
    this.hideCard = true;
  }
  AddTableCard = new FormGroup({
    id: new FormControl('', Validators.required),
    cardTitle: new FormControl('', Validators.required),
    cardDescription: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    scrollingRows: new FormControl('', Validators.required)
  });
  get id() {
    return this.AddTableCard.get('id');
  }
  get cardDescription() {
    return this.AddTableCard.get('cardDescription');
  }
  get url() {
    return this.AddTableCard.get('url');
  }
  get scrollingRows() {
    return this.AddTableCard.get('scrollingRows');
  }
  submitTableCard(): void {
    const Data = { ...this.AddTableCard.value, cardType: "Table Card" }
    // if (this.editCard) {
    //   const id = this.AddTableCard.get('id')?.value;
    //   this.dataService.updateCard(id, Data).subscribe(response => {
    //     this.toaster.success('Success', 'Card Updated');
    //     this.editCard = false;
    //     this.AddTableCard.reset();
    //   });
    // }
    // else {
    //   this.dataService.addCard(Data).subscribe(
    //     response => {
    //       this.toaster.success('Success', 'Card Added!');
    //       this.AddTableCard.reset();
    //     });
    // }
  }
  deleteCard() {
    const id = this.AddTableCard.get('id')?.value;
    // this.dataService.getDashboard().subscribe((response: any) => {
    //   const dashboards = response as any;
    //   let cardExist = false;
    //   let dashboardNames: string[] = [];
    //   dashboards.forEach((dashboard: any) => {
    //     dashboard.Row.forEach((row: any) => {
    //       if (row.DroppedCard) {
    //         const matchingCard = row.DroppedCard.find((card: any) => card.cardId === id);
    //         if (matchingCard) {
    //           cardExist = true;
    //           dashboardNames.push(dashboard.DashboardDescription);
    //         }
    //       }
    //     });
    //   });
    //   if (cardExist) {
    //     const dashboardNamesString = dashboardNames.join(', ');
    //     this.toaster.error(`'Delete card from Dashboards: ${dashboardNamesString}`);
    //   } else {
    //     this.dataService.deleteCard("Table Card", id).subscribe(() => {
    //       this.toaster.success('Success', 'Card Deleted!');
    //       this.editCard = false;
    //       this.addCard = true;
    //       this.AddTableCard.reset();
    //     });
    //   }
    // });
  }
  duplicateID($event: any) {
    const id = $event?.target.value;
    // this.dataService.getCards().subscribe((response: any) => {
    //   const matchedId = response.some((card: any) => card.id === id);
    //   this.duplicate = matchedId;
    //   return;
    // });
  }
}
