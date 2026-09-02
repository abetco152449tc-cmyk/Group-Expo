import { StatusBar } from 'expo-status-bar';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.logoArea}>
            <View style={styles.logoFrame}>
              <Image source={require('@/assets/images/12.png')} style={styles.logo} />
            </View>
            <Text style={styles.title}>Student Portal</Text>
            <Text style={styles.subtitle}>Welcome back. Sign in to continue.</Text>
          </View>

          <View style={styles.formArea}>
            <View style={styles.formCard}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="name@student.edu"
                placeholderTextColor="#8a94a6"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#8a94a6"
                secureTextEntry
              />

              <TouchableOpacity activeOpacity={0.85} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <Text style={styles.footerText}>Forgot password?</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#101828',
  },
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  logoArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 18,
  },
  logoFrame: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 15,
    textAlign: 'center',
  },
  formArea: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formCard: {
    width: '100%',
    maxWidth: 420,
    padding: 22,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 10,
  },
  label: {
    color: '#344054',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d0d5dd',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    color: '#101828',
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#f9fafb',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    paddingVertical: 16,
    backgroundColor: '#2f80ed',
    marginTop: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  footerText: {
    color: '#2f80ed',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 18,
  },
});
