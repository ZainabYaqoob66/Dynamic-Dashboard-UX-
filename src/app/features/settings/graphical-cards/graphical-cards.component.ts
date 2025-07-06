import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { featureConfig } from '../../feature.config';

@Component({
  selector: 'app-graphical-cards',
  standalone: true,
  imports: [...featureConfig],
  templateUrl: './graphical-cards.component.html',
  styleUrl: './graphical-cards.component.css'
})
export class GraphicalCardsComponent {

  @Input() editCard: boolean = false;
  duplicate: any = false;
  GraphType = [
    { label: 'Select a Type' },
    { label: 'Line', value: 'bi-bar-chart-line' },
    { label: 'Bar', value: 'bi-bar-chart-line-fill' },
    { label: 'Pie', value: 'bi-pie-chart' },
  ];


  showOptions = false;
  addCard = false;
  hideCard = false;
  // constructor(private toastr: ToastrService, private dataService: DataService) { }

  ngOnInit(): void {
    this.addCard = false;
  }
  addGraphicalCard() {
    this.addCard = true;
    this.editCard = false;
    this.hideCard = false;
    this.AddGraphicalCard.reset();
    this.AddGraphicalCard.get('id')?.enable();
  }

  hideCardDetails() {
    this.hideCard = true;

  }
  editGraphicalCard(item: any) {

    this.hideCard = false;
    this.editCard = true;
    this.AddGraphicalCard.patchValue(item);
    this.AddGraphicalCard.get('id')?.disable();
  }
  AddGraphicalCard = new FormGroup({
    id: new FormControl('', Validators.required),
    cardTitle: new FormControl('', Validators.required),
    cardDescription: new FormControl('', Validators.required),
    graphType: new FormControl('bi-bar-chart-line', Validators.required),
    url: new FormControl('', Validators.required)
  });
  get id() {
    return this.AddGraphicalCard.get('id');
  }
  get cardDescription() {
    return this.AddGraphicalCard.get('cardDescription');
  }
  get url() {
    return this.AddGraphicalCard.get('url');
  }
  get graphType() {
    return this.AddGraphicalCard.get('graphType');
  }
  submitGraphicalCard(): void {
    const Data = { ...this.AddGraphicalCard.value, cardType: "Graphical Card" }
    // if (this.editCard) {
    //   const id = this.AddGraphicalCard.get('id')?.value;
    //   this.dataService.updateCard(id, Data).subscribe(response => {
    //     this.toastr.success('Success', 'Card Updated');
    //     this.editCard = false;
    //     this.AddGraphicalCard.reset();
    //   });
    // }
    // else {
    //   this.dataService.addCard(Data).subscribe(
    //     response => {
    //       this.toastr.success('Success', 'Card Added!');
    //       this.AddGraphicalCard.reset();
    //     });
    // }
  }
  deleteCard() {
    const id = this.AddGraphicalCard.get('id')?.value;
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
    //     this.toastr.error(`'Delete card from Dashboards: ${dashboardNamesString}`);
    //   } else {
    //     this.dataService.deleteCard("Graphical Card", id).subscribe(() => {
    //       this.toastr.success('Success', 'Card Deleted!');
    //       this.editCard = false;
    //       this.addCard = true;
    //       this.AddGraphicalCard.reset();
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
