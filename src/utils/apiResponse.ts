export class ApiResponse {
  statusCode: number;
  data: Record<string, any>;
  message: string;
  success: boolean;

  constructor(statusCode: number, data: Record<string, any>, message: string = "success") {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = statusCode >= 200 && statusCode < 400
  }
}


