import Layout from "@theme/Layout"

function ReposButtons() {
    function goTo(loc) {
        return () => {
            window.location.assign(loc);
        }
    }
    
    return (
        <div className="buttons-div">
            <button onClick={goTo("https://github.com/kotekpsotek/svelte-chat-gui")}>
                @svelte-chat/gui
            </button>
            <button onClick={goTo("https://github.com/kotekpsotek/svelte-chat-plugin")}>
                @svelte-chat/plugin
            </button>
        </div>
    )
}

export default function GithubOptions() {
    return (
        <Layout title="Pick to which repo you will go" description="@svelte-chat derives from multiple repos" wrapperClassName="hv-wrapper-xd2">
            <ReposButtons/>
        </Layout>
    );
}