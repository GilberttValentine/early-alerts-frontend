export default class CodeGenerator {
  static generateCode() {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    
    return code;
  }
}