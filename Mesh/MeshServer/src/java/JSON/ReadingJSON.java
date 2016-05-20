/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JSON;

import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Mitchell
 */
public class ReadingJSON 
{
    private final JSONObject json;
    
    public ReadingJSON(JSONObject j)
    {
        this.json = j;
    }
    
    public String getRequestType()
    {
        try {
            return (String) json.get("request");
        } catch (JSONException ex) {
            Logger.getLogger(ReadingJSON.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    public ArrayList<String> GetUserNameAndPassword()
    {
        ArrayList<String> list = new ArrayList<>();
        try {
            ArrayList<String> userAndPass = new ArrayList();
            JSONArray temp = json.getJSONArray("data");
            String user = temp.getString(0);
            String pass = temp.getString(1);
            
            userAndPass.add(user);
            userAndPass.add(pass);
            return userAndPass;
        } catch (JSONException ex) {
            Logger.getLogger(ReadingJSON.class.getName()).log(Level.SEVERE, null, ex);
        }
        return list;
    }
    
}
