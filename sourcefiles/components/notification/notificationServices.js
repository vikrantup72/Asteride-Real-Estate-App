import PushNotification from 'react-native-push-notification';

export const handleNotification = (title, msg, bigText, color) => {
  PushNotification.cancelAllLocalNotifications();
  PushNotification.localNotification({
    channelId: 'test-channel',
    title: title,
    message: msg,
    bigText: bigText,
    color: color,
  });
};
export const scheduleNotification = item => {
  PushNotification.localNotificationSchedule({
    channelId: 'test-channel',
    title: 'Unlock the door',
    message: 'Your location is set by default to 30 meters from your door.',
    bigText:
      "'You can unlock the door that is located 30 meters away from your current location'",
    date: new Date(Date.now() + 60 * 1000),
    allowWhileIdle: true,
  });
};
