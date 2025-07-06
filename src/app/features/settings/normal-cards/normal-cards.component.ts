import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { featureConfig } from '../../feature.config';

@Component({
  selector: 'app-normal-cards',
  standalone: true,
  imports: [...featureConfig],
  templateUrl: './normal-cards.component.html',
  styleUrl: './normal-cards.component.css'
})
export class NormalCardsComponent {

  @Input() editCard: boolean = false;
  duplicate: any = false;
  iconOptions = [
    { label: 'Select an icon' },
    { label: ' User ', value: 'bi-user' },
    { label: ' Camera ', value: 'bi-camera' },
    { label: ' Calendar ', value: 'bi-calendar' },
    { label: ' SMS ', value: 'bi-envelope' }
  ];
  addCard = false;
  hideCard = false;
  //  constructor(private toastr: ToastrService,private dataService:DataService) {}

  ngOnInit(): void {
    this.addCard = false;
  }
  addNormalcard() {
    this.addCard = true;
    this.editCard = false;
    this.hideCard = false;
    this.AddNormalCard.reset();
    this.AddNormalCard.get('id')?.enable();
  }

  hideCardDetails() {
    this.hideCard = true;
  }
  editNormalCard(item: any) {
    this.hideCard = false;
    this.editCard = true;
    this.AddNormalCard.patchValue(item);
    this.AddNormalCard.get('id')?.disable();
  }
  AddNormalCard = new FormGroup({
    cardTitle: new FormControl('', Validators.required),
    cardDescription: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    icon: new FormControl('pi-user', Validators.required)
  });

  submitNormalCard(): void {
    const Data = { ...this.AddNormalCard.value, cardType: "Normal Card" }
    // if(this.editCard )
    // {
    //      const id=this.AddNormalCard.get('id')?.value;
    //      this.dataService.updateCard(id, Data).subscribe({
    //       next: () => {
    //         this.toastr.success('Success', 'Card Updated');
    //         this.editCard=false;
    //         this.AddNormalCard.reset(); 
    //       },
    //       error: () => {
    //         this.toastr.error('Error', 'Failed to update card');
    //       }
    //     });
    // }
    // else
    // {
    //   this.dataService.addCard(Data).subscribe(
    //     () => {
    //       this.toastr.success('Success', 'Card Added!'); 
    //       this.AddNormalCard.reset(); 
    //     });
    // }
  }
  deleteCard() {
    const id = this.AddNormalCard.get('id')?.value;
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

    //   // if (cardExist) {
    //   //   const dashboardNamesString = dashboardNames.join(', ');
    //   //   this.toastr.error(`'Delete card from Dashboards: ${dashboardNamesString}`);
    //   // } else {
    //   //   this.dataService.deleteCard("Normal Card",id).subscribe(() => {
    //   //     this.toastr.success('Success', 'Card Deleted!');
    //   //     this.editCard = false;
    //   //     this.addCard = true;
    //   //     this.AddNormalCard.reset();
    //   //   });
    //   // }
    // });
  }
  duplicateID($event: any) {
    const id = $event?.target.value;
    // this.dataService.getCards().subscribe((response:any)=>{
    //   const matchedId = response.some((card: any) => card.id === id);
    //   this.duplicate=matchedId;
    //   return;
    // });
  }
}
