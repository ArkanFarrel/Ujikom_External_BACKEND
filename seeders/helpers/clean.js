import Property from "../../model/propertyModel.js";
import User from "../../model/userModel.js";

export default async function clean() {
    await User.destroy({
        where: {},
        force: true,
        cascade: true,
    });

    await Property.destroy({
        where: {},
        force: true,
        cascade: true,
    });
}