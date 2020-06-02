import { Component, OnInit } from '@angular/core';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(
    private actionSheet: ActionSheet
  ) { }

  ngOnInit() {
  }

  public buttonLabel: Array<string> = ["Share via Facebook", "Share via Twitter"];

  public onClickActionSheet() {
    let androidTheme: number = this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK;
    const options: ActionSheetOptions = {
      title: "What do you want with this image?",
      subtitle: "Choose an action",
      buttonLabels: this.buttonLabel,
      addCancelButtonWithLabel: "Cancel",
      addDestructiveButtonWithLabel: "Delete",
      destructiveButtonLast: true
    }

    this.actionSheet.show(options).then((buttonIndex: number) => {
      window.alert(`Button Pressed ${buttonIndex}, Android Theme ${androidTheme}`)
    })
  }

}
