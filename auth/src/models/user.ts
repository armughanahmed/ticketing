import mongoose from "mongoose";

// an interface that describes the properties
// that can be used to create a user

interface UserAttrs {
  email: string;
  password: string;
}

// an interface that describes the properties
// that a UserModel has

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has

interface UserDoc extends UserAttrs, mongoose.Document {}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
