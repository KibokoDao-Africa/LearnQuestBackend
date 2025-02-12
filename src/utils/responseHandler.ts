// utils/responseHandler.ts
export const successResponse = (res: any, data: any, message: string = 'Success') => {
    return res.status(200).json({ message, data });
  };
  
  export const errorResponse = (res: any, error: any, message: string = 'Error') => {
    console.error(error);
    return res.status(500).json({ message, error });
  };
  