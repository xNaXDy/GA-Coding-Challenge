import { Component, OnDestroy, OnInit } from '@angular/core';
import { Wine } from './schema/wine.schema';
import { AppService } from './app.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'challenge-frontend';

  wines: Wine[] = [];

  displayedColumns: string[] = ['country', 'title', 'region', 'lage', 'winery', 'actions'];

  shouldCreateWine = true;

  private destroy$ = new Subject<void>();

  constructor(private appService: AppService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.refreshData();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  editWine(wine: Wine) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.componentInstance.editMode = true;
    dialogRef.componentInstance.wineData = wine;

    dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(async result => {
      if (result && dialogRef.componentInstance.wineData) {
        await this.appService.updateWine(dialogRef.componentInstance.wineData);
        this.refreshData();
      }
    });
  }

  addWine() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.componentInstance.editMode = false;

    dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(async result => {
      if (result && dialogRef.componentInstance.wineData) {
        await this.appService.createWine(dialogRef.componentInstance.wineData);
        this.refreshData();
      }
    });
  }

  async deleteWine(wine: Wine) {
    await this.appService.deleteWine(wine._id);
    this.refreshData();
  }

  async refreshData() {
    this.wines = (await this.appService.getAllWines()).wines;
  }
}

