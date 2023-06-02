import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="Index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: '/',
        }}
      />
      <Tabs.Screen
        name="Sobre"
        options={{
        href: 'telaA',
        }}
      />
      <Tabs.Screen
        name="Cadastro"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}