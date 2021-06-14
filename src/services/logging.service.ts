// service is just a normal TS class
class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}

export default LoggingService;
