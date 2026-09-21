import { chatGPTSignInPath, getChatGPTUser } from "./chatgpt-auth";
import WorkspaceClient from "./workspace-client";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await getChatGPTUser();

  if (user) return <WorkspaceClient />;

  return (
    <main className="loginHome">
      <section className="loginPanel">
        <img src="/realtree-logo.png" alt="Realtree" />
        <p className="loginEyebrow">INTERNAL TEAM ACCESS</p>
        <h1>Customer care,<br /><em>all in one place.</em></h1>
        <p className="loginCopy">Sign in with your approved team account to access customer cases, SOPs, claims guidance, and message templates.</p>
        <a className="loginButton" href={chatGPTSignInPath("/")}>SIGN IN TO REALTREE CUSTOMER CARE →</a>
        <div className="loginTrust"><span>●</span><p><b>Protected team workspace</b><small>Access is managed through your company account.</small></p></div>
      </section>
      <aside className="loginVisual"><div><small>REALTIME OPERATIONS</small><strong>Resolve faster.<br />Respond consistently.</strong><p>One shared source of truth for Amazon and Walmart customer care.</p></div></aside>
    </main>
  );
}
