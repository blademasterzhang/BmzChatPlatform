export class AppGlobal{
	private static instance:AppGlobal = new AppGlobal();
	/**是否是调试状态 */
	isDebug:boolean = true;

	/**服务器地址 */
	serverUrl:string = "http://192.168.0.104:3000";

	/**debug服务器地址 */
	debugServerUrl:string = this.isDebug?"":this.serverUrl;

	constructor(){
		if (AppGlobal.instance) {
            throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
        }
        AppGlobal.instance = this;
	}

	public static getInstance(): AppGlobal {
        return AppGlobal.instance;
    }
}