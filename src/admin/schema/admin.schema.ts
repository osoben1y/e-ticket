import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin{
    @Prop()
    fullName: String;

    @Prop({required: true})
    email: String;

    @Prop()
    phoneNumber: String;

    @Prop()
    hashedPassword: String;

    @Prop()
    hashedRefreshToken: String;

    @Prop({default: true})
    isActive: boolean;

    @Prop({default: false})
    isCreator: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
