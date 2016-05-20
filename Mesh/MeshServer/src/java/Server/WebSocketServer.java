/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Server;

import JSON.ReadingJSON;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Mitchell
 */

@ServerEndpoint("/serverConnection")
public class WebSocketServer 
{
    private ReadingJSON json;
    private final SessionHandler sessionHandler = new SessionHandler();
    
    @OnOpen
    public void handleOpen(Session session)
    {
        System.out.println("Client is connected");
        sessionHandler.addSession(session);
    }
    
    @OnClose
    public void handleClose(Session session)
    {
        System.out.println("Client is disconnected");
        sessionHandler.removeSession(session);
    }

    @OnError
        public void handleError(Throwable error) {
        Logger.getLogger(WebSocketServer.class.getName()).log(Level.SEVERE, null, error);
    }

    @OnMessage
    public void handleMessage(String message, Session session) 
    {
        System.out.println("Received message from client");
        json = new ReadingJSON(this.parseJSON(message));
        String requestType = json.getRequestType();
        System.out.println(requestType);
        if(requestType.equals("login"))
        {
            loginUser(json.GetUserNameAndPassword());
        }
    }
    
    private void loginUser(ArrayList<String> data)
    {
        String username = data.get(0);
        String password = data.get(1);
        System.out.println("Username: " + username);
        System.out.println("Password: " + password);
    }
    
    private JSONObject parseJSON(String message)
    {
        JSONObject toReturn = null;
        try 
        {
            toReturn = new JSONObject(message);
        } 
        catch (JSONException ex) 
        {
            Logger.getLogger(WebSocketServer.class.getName()).log(Level.SEVERE, null, ex);
        }
        return toReturn;
    }    
}
