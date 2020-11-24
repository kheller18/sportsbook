const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
      type: String,
      trim: true,
      allowNull: false
    },
    lastName: {
      type: String,
      trim: true,
      allowNull: false
    },
    email: {
      type: String,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      },
    },
    password: {
      type: String,
      allowNull: false
    },
    accessToken: {
      type: String,
      allowNull: false
    },
    sessionSalt: {
      type: String,
      allowNull: false
    }
});

userSchema.associate = function(models) {
  userSchema.hasOne(models.Parent, {
    onDelete: 'cascade'
  });
};

userSchema.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.addHook('beforeCreate', (user) => {
  user.password = bcrypt.hashSync(
    user.password,
    bcrypt.genSaltSync(10),
    null
  );
});

const User = mongoose.model('User', userSchema);

module.exports = User;
