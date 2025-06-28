import { createMessageIntoDB, getAllMessageFromDB } from "./message.service.js";

export const createMessage = async (req, res, next) => {
  try {
    const messageInfo = req.body;
    const result = await createMessageIntoDB(messageInfo);
    res.status(200).json({
      success: true,
      message: "Sell post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllMessage = async (req, res, next) => {
  try {
    const result = await getAllMessageFromDB();
    res.status(200).json({
      success: true,
      message: "All books get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
