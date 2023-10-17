import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice, InvoiceDocument } from './invoice.model';

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
  ) {}

  async findAll(): Promise<Invoice[]> {
    //return prisma.invoice.findMany()
    return this.invoiceModel.find({}, { __v: 0 }).exec();
  }
  async findById(id: string): Promise<Invoice | null> {
    // return prisma.invoice.findUnique({
    //   where: {
    //     id: id,
    //   },
    // });
    return this.invoiceModel.findById(id).exec();
  }
}
