# angular-telegram-auth-widget
Example of authentication via Telegram in your Angular application.

First of all you need to create a telegram bot via https://t.me/botfather and use command */setdomain*.
After it you need to create a component for auth telegram button. (see **TelegramAuthWidgetComponent.ts** and https://core.telegram.org/widgets/login).

Use **telegram-auth-widget** to create a button for authentication:
```
<telegram-auth-widget botName="your_bot_username"></telegram-auth-widget>
```
Don't forget to set the value for **botName**, that you created via @BotFather.

**TelegramLoginService** contains callback **telegramCallback** that will be called when response from Telegram has been received:
```
private telegramCallback(telegramAuthResponse: TelegramAuthResponse) {
  // You can subscribe on it in component and send it to backend.
  this.responseUpdated.next(telegramAuthResponse);
}
```
