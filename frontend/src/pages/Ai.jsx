const Ai = () => {
  return (
    <div className="ai-container">
      <h2>AI Medical Triage</h2>
      <div className="chat-box">
        <div className="bot-msg">Describe your emergency...</div>
      </div>
      <div className="input-area">
        <button className="mic-btn">🎙️ Hold to Speak</button>
        <input type="text" placeholder="Type symptoms here..." />
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default Ai;
