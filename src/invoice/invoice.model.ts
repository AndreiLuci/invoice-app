import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Invoice {
  @Prop()
  amount: number;

  @Prop()
  due_date: Date;

  @Prop()
  details: string;
}

export type InvoiceDocument = Invoice & Document;

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
